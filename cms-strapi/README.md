# Athens Website

_Description_
### Documentation

In this section, you'll find resources to help users understand how to use the system effectively.

Detailed information about API methods can be found in the API documentation:

**API methods:**

- Authentication
- Metadata
- Pagination
- Errors
- Versioning

**And more methods in the oficial documentation:** **[API Documentation](https://stripe.com/docs/api)**: Explore the available API methods, request parameters, authentication details, and response formats.

## Development

> Note: You need to be inside the `cms-strapi` folder for it to work correctly.

### Use the following command in the console to copy the content to your .env file:

```shell
cp .env.example .env
```

Open and edit the .env file using the vi command:
```shell
vi .env
```
## OR

Use Visual Studio Code

Find the .env file and open it.

**Paste the content into your .env file.**

```ts
HOST=0.0.0.0
PORT=1337
APP_KEYS=zUYIj2jqfXBL/2YI1FpUGw==,HJVO8ZEMEJ172gSsEb0J3w==,d77oW+NayMafgkKFs/lzyA==,wG3E4O33HN5GHRlNI8bALg==
API_TOKEN_SALT=gq3VO34Ssf+d5xDycDpwJw==
ADMIN_JWT_SECRET=+3o5hrSnipj/c9MfcN2qTQ==
TRANSFER_TOKEN_SALT=4CN2+qa56LGolLkpZufMAQ==
JWT_SECRET=XJtTIYjX6QqPhlLx8qfU+A==
```
Save and exit the vi editor. For vi, you can usually press Esc, type :wq, and press Enter.

Save the changes to `.env`

Rebuilding the Strapi application after updating your file:
- Use the build command to rebuild the application.

```shell
npm run build
```

Starting the Strapi application:

- With autoReload enabled (development):

```shell
npm run develop
```

- Without autoReload enabled (production):

```shell
npm run start
```  
 
[More information](https://docs.strapi.io/dev-docs/installation/cli)

## Deployment

_TBD_

