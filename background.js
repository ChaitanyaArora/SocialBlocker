chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
        {
            "id": 1,
            "priority": 1,
            "action": { "type": "block" },
            "condition": {
                "urlFilter": "linkedin.com",
                "resourceTypes": ["main_frame"]
            }
        },
        {
            "id": 2,
            "priority": 1,
            "action": { "type": "block" },
            "condition": {
                "urlFilter": "instagram.com",
                "resourceTypes": ["main_frame"]
            }
        }
    ],
    removeRuleIds: [1, 2]
});
