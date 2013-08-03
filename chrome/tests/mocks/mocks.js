var mockCollection = {"id":"2dd2b664-c410-d3b4-8e33-79fbd4c5b580","name":"HttpBin Local","order":["c456be6d-9c21-bd3a-c212-2573993f5005","10d05644-8c2a-dd0d-a052-abf2df9009d7","68ff636a-b8eb-dfef-8446-ca0f476e1ff6","e28d2912-bb25-93c8-0748-0d5ae373a4d9","0d2ba987-30d5-ecd8-8863-c0de47db9389","da2ca5ea-bc34-2297-7e3f-d1230f178ebc","7f3daadf-ac3a-fbf3-f2de-e8d8880f483f","b260df94-3aff-7bd2-e72e-1c5aad2dd67e","b9849126-ae5f-6104-cf25-213ef2678f9c","1c8412a5-823e-4639-3d12-ffdeb2756d9d"],"timestamp":1374398513014,"requests":[{"collectionId":"bc406201-5235-cc70-bfd8-d4f1de4b17b9","id":"0d2ba987-30d5-ecd8-8863-c0de47db9389","name":"GET","description":"Send a simple GET request to the local server","url":"http://localhost:5000/get","method":"GET","headers":"","data":[],"dataMode":"params","responses":[],"version":2},{"collectionId":"bc406201-5235-cc70-bfd8-d4f1de4b17b9","id":"10d05644-8c2a-dd0d-a052-abf2df9009d7","name":"Post URLEncoded","description":"","url":"http://localhost:5000/post","method":"POST","headers":"","data":[{"key":"but","value":"this","type":"text"},{"key":"is","value":"going","type":"text"},{"key":"to","value":"be","type":"text"},{"key":"urle","value":"encodeded asda asd ","type":"text"}],"dataMode":"urlencoded","responses":[],"version":2},{"collectionId":"bc406201-5235-cc70-bfd8-d4f1de4b17b9","id":"1c8412a5-823e-4639-3d12-ffdeb2756d9d","name":"Purge","description":"","url":"http://localhost:5000/get","method":"PURGE","headers":"Content-Type: text/json\n","data":[{"key":"test","value":"blah","type":"text"},{"key":"something","value":"new","type":"text"},{"key":"is","value":"coming","type":"text"},{"key":"to","value":"town","type":"text"}],"dataMode":"params","responses":[],"version":2},{"collectionId":"bc406201-5235-cc70-bfd8-d4f1de4b17b9","id":"68ff636a-b8eb-dfef-8446-ca0f476e1ff6","name":"POST - application/json","description":"","url":"http://localhost:5000/post","method":"POST","headers":"Content-Type: application/json\n","data":"{\n  \"json\": \"is quite cool\"\n}","dataMode":"raw","responses":[],"version":2},{"collectionId":"bc406201-5235-cc70-bfd8-d4f1de4b17b9","id":"7f3daadf-ac3a-fbf3-f2de-e8d8880f483f","name":"Head","description":"","url":"http://localhost:5000/head","method":"HEAD","headers":"","data":[],"dataMode":"params","responses":[],"version":2},{"collectionId":"bc406201-5235-cc70-bfd8-d4f1de4b17b9","id":"b260df94-3aff-7bd2-e72e-1c5aad2dd67e","name":"Options","description":"","url":"http://localhost:5000/options","method":"OPTIONS","headers":"","data":[],"dataMode":"params","responses":[],"version":2},{"collectionId":"bc406201-5235-cc70-bfd8-d4f1de4b17b9","id":"b9849126-ae5f-6104-cf25-213ef2678f9c","name":"PUT - text/html","description":"","url":"http://localhost:5000/put","method":"PUT","headers":"Content-Type: text/html\n","data":"<html>\n  XML not so much\n</html","dataMode":"raw","responses":[],"version":2},{"collectionId":"bc406201-5235-cc70-bfd8-d4f1de4b17b9","id":"c456be6d-9c21-bd3a-c212-2573993f5005","name":"Post FormData","description":"","url":"http://localhost:5000/post","method":"POST","headers":"","data":[{"key":"test","value":"blah","type":"text"},{"key":"something","value":"new","type":"text"},{"key":"is","value":"coming","type":"text"},{"key":"to","value":"town","type":"text"}],"dataMode":"params","responses":[],"version":2},{"collectionId":"bc406201-5235-cc70-bfd8-d4f1de4b17b9","id":"da2ca5ea-bc34-2297-7e3f-d1230f178ebc","name":"Delete","description":"","url":"http://localhost:5000/delete","method":"DELETE","headers":"","data":[],"dataMode":"params","responses":[],"version":2},{"collectionId":"bc406201-5235-cc70-bfd8-d4f1de4b17b9","id":"e28d2912-bb25-93c8-0748-0d5ae373a4d9","name":"POST - application/xml","description":"","url":"http://localhost:5000/post","method":"POST","headers":"Content-Type: application/xml\n","data":"<html>\n  XML not so much\n</html","dataMode":"raw","responses":[],"version":2}]};

// TODO Simplify using JSMockito
function getSettingsMock() {
    var settings = {
        getSetting: function(key) {
            if (key === "variableDelimiter") {
                return "{{...}}";
            }
            else if (key === "selectedEnvironmentId") {                
                return "1";
            }
        }
    };
    
    return settings;
}

// TODO Really need a better way to mock this
function getEnvironmentsMock() {
    var environments = {
        on: function(a1, a2, a3) {

        },

        get: function(key) {            
            if (key === "1") {
                return {
                    toJSON: function() {
                        return {
                            values: [
                                {
                                    key: "env_foo",
                                    value: "env_bar"
                                }
                            ]
                        };
                    }
                };
            }            
        }
    };

    return environments;
}

function getGlobalsMock() {
    var globals = {
        get: function(key) {
            if (key === "globals") {
                return [
                    {
                        key: "foo",
                        value: "bar"
                    },
                    {
                        key: "something",
                        value: "new"
                    }
                ];
            }
        }
    };

    return globals;
}
