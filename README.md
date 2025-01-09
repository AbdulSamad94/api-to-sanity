# Getting Started

# Step 1 (Installation)

- Install Next.js
   Run the following command to create a new Next.js app:
```bash
 npx create-next-app@latest my-app
```

- Install Sanity.io
   Run the following command to set up Sanity:
```bash
 npm create sanity@latest
```

# Step 2 (Making fake-api)

1. Go to [MockAPI.io](https://mockapi.io) to get started.
2. Create an account and log in.
   
![MockAPI.io Screenshot](/public/step-1.jpg)

3. Create a new project.

![MockAPI.io Screenshot](/public/step-2.jpg)

4. Give it any name and click Create.

![MockAPI.io Screenshot](/public/step-3.jpg)

5. Add a new resource. Give it any name and click Create. You don’t need to add anything else.

![MockAPI.io Screenshot](/public/step-4.jpg)

6. Once created, click on the Data tab.

![MockAPI.io Screenshot](/public/step-5.jpg)

7.You will see an empty array. Go to ChatGPT or any other platform and ask it to generate 20 products in JSON format. Use a good prompt that includes:
- ProductName
- ProductDescription
- ProductImage
- Price, etc
8. Also, ask it to generate the Sanity schema according to this data.
9. Once you get the data, copy it and paste it into the file.

Note: If it says "Invalid JSON," check the data to ensure it’s in valid JSON format.

10. Click Update.

![MockAPI.io Screenshot](/public/step-6.jpg)

11. Click on the URL to be redirected to the API URL.

# Step 3 (Token Generation)

1. Go to [Sanity.io](https://sanity.io) and navigate to your project. Then, go to the API section.
2. Go to the Tokens section.
3. Generate a token.

![MockAPI.io Screenshot](/public/step-8.jpg)

4. Copy and paste it into your `.env.local` file. Your .env file should look like this:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="your-porject-id"
NEXT_PUBLIC_SANITY_DATASET="your_project_dataset"
NEXT_SANITY_TOKEN=your_api_token
```
5. Go to `
   src/sanity/lib/client.ts
   ` & paste the following:

```bash
   export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.NEXT_SANITY_TOKEN,
  useCdn: true, 
})
```
6. Go to `
   /src/sanity/schemaType
   `
8. Make a file.
`
eg:Product.ts
`
9. Paste the schema that you generated.
10. Import the file and set it into types:

```bash
import { type SchemaTypeDefinition } from 'sanity'
import insetData from './insetData'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [insetData],
}
```

# Step 4 (Running function)

1. Create an API route at `src/app/api/upload/route.ts`
2. Paste the code provided for the route.
3. Note: Ensure that the fields you define match your schema or data.
4. Use ThunderClient, Postman, or navigate to `http://localhost:3000/api/upload` in your browser.
5. You should see the following message: `
   {"message":"All products uploaded successfully!"}
   `
6. Now, navigate to `http://localhost:3000/studio` or any route you provided during the Sanity installation (e.g : `http://localhost:3000/yourRoute` )
7. Your data will be displayed there.
