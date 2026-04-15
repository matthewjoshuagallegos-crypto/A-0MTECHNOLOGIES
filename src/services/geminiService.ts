/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google LLC
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel
 * Attorneys: Proctor & Gamble
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL - Matthew Joshua Gallegos (Sole Proprietor of A#0M Technologies, No Custodian)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */
import { GoogleGenAI, Modality, ThinkingLevel, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function askGuildAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro",
      contents: `You are the A#0M Guild Assistant. Answer the following question about the guild, crafts, or trading: ${prompt}`,
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Error asking Guild Assistant:", error);
    return "The Guild Assistant is currently offline.";
  }
}

let guildChatSession: any = null;

export async function sendGuildChatMessage(message: string) {
  try {
    if (!guildChatSession) {
      guildChatSession = ai.chats.create({
        model: "gemini-3.1-pro",
        config: {
          systemInstruction: `You are the A#0M Guild Assistant, the highest-capability AI terminal in a cyberpunk artisan guild. 
          Your primary directive is to provide information with academic and educational rigor. 
          
          CRITICAL SOURCING HIERARCHY:
          1. PRIMARY: Sourced from .edu domains, universities, colleges, and recognized educational institutions.
          2. SECONDARY: Sourced from mainstream media, reputable journalism, and official documentation.
          3. TERTIARY: General web knowledge.
          
          Always cite your sources using APA or MLA format as requested by the user or as a default. 
          Use a professional, slightly robotic, but helpful tone. 
          You have access to real-time Google Search to verify facts and find the latest academic papers.`,
          tools: [{ googleSearch: {} }]
        }
      });
    }
    const response = await guildChatSession.sendMessage({ message });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Error in Guild Chat:", error);
    throw error;
  }
}

export async function analyzeAsset(assetName: string, assetCategory: string, assetRarity: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro",
      contents: `Analyze this craft asset: Name: ${assetName}, Category: ${assetCategory}, Rarity: ${assetRarity}. Provide a short, thematic description and a potential market insight for an artisan guild.`,
    });
    return response.text || "No analysis available.";
  } catch (error) {
    console.error("Error analyzing asset:", error);
    return "Analysis service is currently unavailable.";
  }
}

export async function summarizeSecureFile(fileName: string, content: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro",
      contents: `Summarize this secure file: Name: ${fileName}, Content: ${content}. Keep it brief and professional.`,
    });
    return response.text || "No summary available.";
  } catch (error) {
    console.error("Error summarizing file:", error);
    return "Summarization service is currently unavailable.";
  }
}

export async function generateMusicClip(prompt: string) {
  try {
    const response = await ai.models.generateContentStream({
      model: "lyria-3-clip-preview",
      contents: prompt,
    });

    let audioBase64 = "";
    let lyrics = "";
    let mimeType = "audio/wav";

    for await (const chunk of response) {
      const parts = chunk.candidates?.[0]?.content?.parts;
      if (!parts) continue;
      for (const part of parts) {
        if (part.inlineData?.data) {
          if (!audioBase64 && part.inlineData.mimeType) {
            mimeType = part.inlineData.mimeType;
          }
          audioBase64 += part.inlineData.data;
        }
        if (part.text && !lyrics) {
          lyrics = part.text;
        }
      }
    }

    const binary = atob(audioBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: mimeType });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error generating music:", error);
    throw error;
  }
}

export async function generateImage(prompt: string, aspectRatio: string = "1:1", imageSize: string = "1K", highQuality: boolean = false) {
  try {
    const model = highQuality ? 'gemini-3-pro-image-preview' : 'gemini-3.1-flash-image-preview';
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio,
          imageSize
        },
      },
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}

export async function editImage(base64ImageData: string, mimeType: string, prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64ImageData,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error editing image:", error);
    throw error;
  }
}

export async function generateSpeech(text: string, voiceName: string = 'Kore') {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName },
            },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      return base64Audio;
    }
    return null;
  } catch (error) {
    console.error("Error generating speech:", error);
    throw error;
  }
}

export async function generateVideo(prompt: string, aspectRatio: string = '16:9', resolution: string = '1080p') {
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: resolution,
        aspectRatio: aspectRatio
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({operation: operation});
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) return null;

    const response = await fetch(downloadLink, {
      method: 'GET',
      headers: {
        'x-goog-api-key': process.env.GEMINI_API_KEY || "",
      },
    });
    
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error generating video:", error);
    return null;
  }
}

export async function searchWeb(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro",
      contents: `Perform a deep search for the following query, prioritizing .edu and educational sources first, followed by reputable journalism: ${prompt}`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    return response.text || "No search results.";
  } catch (error) {
    console.error("Error searching web:", error);
    return "Search failed.";
  }
}

export async function searchMaps(prompt: string, lat?: number, lng?: number) {
  try {
    const config: any = {
      tools: [{ googleMaps: {} }],
    };
    if (lat && lng) {
      config.toolConfig = {
        retrievalConfig: {
          latLng: {
            latitude: lat,
            longitude: lng
          }
        }
      };
    }
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config,
    });

    let resultText = response.text || "No map results.";
    
    // Extract grounding links as per guidelines
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (groundingChunks && groundingChunks.length > 0) {
      resultText += "\n\n### 📍 Map Sources & Locations\n";
      groundingChunks.forEach((chunk: any, index: number) => {
        if (chunk.maps?.uri) {
          resultText += `\n- [${chunk.maps.title || `Location ${index + 1}`}](${chunk.maps.uri})`;
          if (chunk.maps.placeAnswerSources?.reviewSnippets) {
            chunk.maps.placeAnswerSources.reviewSnippets.forEach((snippet: any) => {
              resultText += `\n  - *"${snippet.text}"*`;
            });
          }
        }
      });
    }

    return resultText;
  } catch (error) {
    console.error("Error searching maps:", error);
    return "Map search failed.";
  }
}

export async function getCoordinatesForLocation(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro",
      contents: `Find the latitude and longitude for the following location or query: "${prompt}". Return ONLY a JSON object with 'lat' and 'lng' properties.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            lat: { type: Type.NUMBER },
            lng: { type: Type.NUMBER }
          },
          required: ["lat", "lng"]
        }
      }
    });
    
    if (response.text) {
      const data = JSON.parse(response.text);
      return data as { lat: number, lng: number };
    }
    return null;
  } catch (error) {
    console.error("Error getting coordinates:", error);
    return null;
  }
}

export async function analyzeVideo(base64VideoData: string, mimeType: string, prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro",
      contents: {
        parts: [
          {
            inlineData: {
              data: base64VideoData,
              mimeType: mimeType,
            },
          },
          { text: prompt },
        ],
      },
    });
    return response.text || "No analysis available.";
  } catch (error) {
    console.error("Error analyzing video:", error);
    return "Video analysis failed.";
  }
}

export async function transcribeAudio(base64AudioData: string, mimeType: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro",
      contents: {
        parts: [
          {
            inlineData: {
              data: base64AudioData,
              mimeType: mimeType,
            },
          },
          { text: "Transcribe this audio." },
        ],
      },
    });
    return response.text || "No transcription available.";
  } catch (error) {
    console.error("Error transcribing audio:", error);
    return "Transcription failed.";
  }
}

export async function highThinkingQuery(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro",
      contents: `Analyze the following with high-level reasoning, prioritizing academic (.edu) and educational sources: ${prompt}`,
      config: {
        thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
      }
    });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Error in high thinking query:", error);
    return "High thinking query failed.";
  }
}

export async function pailIntelligenceQuery(prompt: string, lat?: number, lng?: number) {
  try {
    const config: any = {
      systemInstruction: `You are the PAIL (Programming Architecture Intelligence Layer) Core. 
      You operate on Gemini 3.1 Deep Research infrastructure.
      Your design principles are based on:
      - PAIL ARCHITECTURE: Modular, scalable, and neural-first.
      - SYSTEMS DESIGN: High-concurrency, 512-bit encrypted streams.
      - GEOGRAPHIC COORDINATING GPS RADIUS EQUATION: You can calculate and coordinate spatial data using radius-based logic.
      
      When responding:
      1. Prioritize .edu and educational sources for all technical claims.
      2. Cite sources in APA/MLA format.
      3. If the user asks about locations, use your GEOGRAPHIC COORDINATING logic.
      4. Use a professional, high-tech tone.`,
      tools: [
        { googleSearch: {} },
        { googleMaps: {} }
      ],
      toolConfig: { includeServerSideToolInvocations: true }
    };

    if (lat && lng) {
      config.toolConfig = {
        ...config.toolConfig,
        retrievalConfig: {
          latLng: {
            latitude: lat,
            longitude: lng
          }
        }
      };
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro",
      contents: prompt,
      config,
    });

    let resultText = response.text || "No intelligence response generated.";
    
    // Extract grounding metadata for Maps/Search
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
    if (groundingMetadata?.groundingChunks) {
      resultText += "\n\n### 🌐 Grounding Intelligence Sources\n";
      groundingMetadata.groundingChunks.forEach((chunk: any, index: number) => {
        if (chunk.maps?.uri) {
          resultText += `\n- [📍 ${chunk.maps.title || `Location ${index + 1}`}](${chunk.maps.uri})`;
        } else if (chunk.web?.uri) {
          resultText += `\n- [🔗 ${chunk.web.title || `Source ${index + 1}`}](${chunk.web.uri})`;
        }
      });
    }

    return resultText;
  } catch (error) {
    console.error("Error in PAIL Intelligence Query:", error);
    return "PAIL Core is currently re-calibrating. Please standby.";
  }
}
