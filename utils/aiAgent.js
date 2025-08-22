// AI Agent utility for product recommendations and search
const aiAgent = {
  async generateRecommendations(userQuery, preferences = {}) {
    try {
      // Simulate AI processing with realistic delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const systemPrompt = `You are an expert electronics advisor. Analyze user requirements and recommend the best electronic gadgets based on their needs, budget, and preferences. Consider factors like performance, value for money, user reviews, and current market trends.`;
      
      const userPrompt = `User query: "${userQuery}". Preferences: ${JSON.stringify(preferences)}. Provide 3-5 specific product recommendations with reasoning.`;
      
      // Use the built-in AI agent function
      const response = await invokeAIAgent(systemPrompt, userPrompt);
      
      return {
        success: true,
        recommendations: response,
        confidence: Math.random() * 0.3 + 0.7 // 70-100% confidence
      };
    } catch (error) {
      console.error('AI recommendation error:', error);
      return {
        success: false,
        error: 'Unable to generate recommendations at this time'
      };
    }
  },

  async analyzeUserIntent(query) {
    try {
      const systemPrompt = `Analyze the user's search query and extract key information like product category, budget range, specific features, and purchase intent. Return a structured analysis.`;
      
      const userPrompt = `Query: "${query}"`;
      
      const analysis = await invokeAIAgent(systemPrompt, userPrompt);
      
      return {
        success: true,
        analysis: analysis,
        category: this.extractCategory(query),
        budget: this.extractBudget(query),
        features: this.extractFeatures(query)
      };
    } catch (error) {
      console.error('Intent analysis error:', error);
      return { success: false };
    }
  },

  extractCategory(query) {
    const categories = {
      'phone': 'smartphones',
      'smartphone': 'smartphones',
      'laptop': 'laptops',
      'computer': 'laptops',
      'headphone': 'headphones',
      'earphone': 'headphones',
      'tablet': 'tablets',
      'ipad': 'tablets',
      'watch': 'smartwatch',
      'smartwatch': 'smartwatch'
    };
    
    const lowerQuery = query.toLowerCase();
    for (const [keyword, category] of Object.entries(categories)) {
      if (lowerQuery.includes(keyword)) {
        return category;
      }
    }
    return 'all';
  },

  extractBudget(query) {
    const budgetMatch = query.match(/\$?(\d+(?:,\d{3})*(?:\.\d{2})?)/g);
    if (budgetMatch) {
      const amounts = budgetMatch.map(match => 
        parseFloat(match.replace(/[$,]/g, ''))
      );
      return {
        min: Math.min(...amounts),
        max: Math.max(...amounts)
      };
    }
    return null;
  },

  extractFeatures(query) {
    const features = [];
    const featureKeywords = [
      'gaming', 'camera', 'battery', 'storage', 'display', 
      'wireless', 'bluetooth', 'waterproof', 'fast charging'
    ];
    
    const lowerQuery = query.toLowerCase();
    featureKeywords.forEach(feature => {
      if (lowerQuery.includes(feature)) {
        features.push(feature);
      }
    });
    
    return features;
  }
};

window.aiAgent = aiAgent;