# C# Examples

## Configuring your client

```
    var client = new PeopleApi(new Configuration
    {
        AccessToken = "xxx.xxxx.xxxx",
        ApiKey = new Dictionary<string, string>
        {
            { "Ocp-Apim-Subscription-Key", "subscription-key" },
            { "X-Onboard-Tenant-Id", "tenant-id" }
        }
    });

```

### Access Token
A JWT generated from Auth0

### Api Key
Your api key which can be found [here](https://solab.portal.azure-api.net/developer)

### Tenant Id
//TODO expose for third parties.

## Accessing People

```
    var people = await client.PeopleGetAsync();
```
