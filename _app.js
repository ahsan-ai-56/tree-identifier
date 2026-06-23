export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image, mimeType } = req.body;

  if (!image) {
    return res.status(400).json({ error: 'No image provided' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Groq API key not configured' });
  }

  const prompt = `You are an expert botanist and arborist with decades of field experience. Analyze this tree image carefully and provide a comprehensive identification report.

Please structure your response EXACTLY as follows (use these exact section headers):

## 🌳 Tree Identification
**Common Name:** [Name]
**Scientific Name:** [Latin name]
**Family:** [Plant family]
**Confidence Level:** [High/Medium/Low] — [brief reason]

## 📍 Native Habitat & Range
[2-3 sentences about where this tree naturally grows, climate preferences, geographic range]

## 🌱 Growth Characteristics
[2-3 sentences about size, growth rate, lifespan, distinctive features like leaf shape, bark texture, flower/fruit characteristics]

## 💧 Care & Cultivation Guide
- **Soil:** [soil preference]
- **Water:** [watering needs]
- **Sunlight:** [light requirements]
- **Pruning:** [pruning tips]
- **Hardiness Zones:** [USDA zones]

## 🌍 Ecological Importance
[2-3 sentences about wildlife value, ecological role, carbon sequestration, relationship with other species]

## 🏛️ Cultural & Historical Significance
[1-2 sentences about traditional uses, cultural importance, or interesting historical facts]

## ⚠️ Notable Facts
[2-3 interesting bullet points about this tree species]

If you cannot confidently identify the tree, provide your best assessment with a lower confidence rating and explain what additional photos would help.`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: `data:${mimeType || 'image/jpeg'};base64,${image}`,
                },
              },
              {
                type: 'text',
                text: prompt,
              },
            ],
          },
        ],
        max_tokens: 1200,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      console.error('Groq API error:', errData);
      return res.status(502).json({ error: errData.error?.message || 'Groq API error' });
    }

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content;

    if (!result) {
      return res.status(502).json({ error: 'No response from AI model' });
    }

    return res.status(200).json({ result });
  } catch (err) {
    console.error('Identification error:', err);
    return res.status(500).json({ error: 'Internal server error. Please try again.' });
  }
}
