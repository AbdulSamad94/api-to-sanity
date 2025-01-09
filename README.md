# Getting Started

# Installation

# Step 1

- Install Next.js
```bash
 npx create-next-app@latest my-app
```

- Install Sanity.io
```bash
 npm create sanity@latest
```

# Step 2

1. Go to [MockAPI.io](https://mockapi.io) to get started.
2. Make Account & Login
   
![MockAPI.io Screenshot](/public/step-1.jpg)

3. Make New Project

![MockAPI.io Screenshot](/public/step-2.jpg)

4. Give any name to it and Create

![MockAPI.io Screenshot](/public/step-3.jpg)

5. Add New Resource And give any name to it and then create you dont have to add anything below

![MockAPI.io Screenshot](/public/step-4.jpg)

6. Once created click on the data

![MockAPI.io Screenshot](/public/step-5.jpg)

7. You will be showed empty array, go to chatGPT or any other platform ask it to generate 20 products in json give good prompt to it which should include : (productsName, productsDescription, ProductImage, price etc)
8. Also ask it to generate the sanitySchema according to this data
9. Once you get the data copy it and paste it in the file

Note : If it says invalid JSON check the data it should be in JSON format

10. Click on Update

![MockAPI.io Screenshot](/public/step-6.jpg)

11. Click on the url you will be redirected to the api url

# Step 3

1. Go to the Sanity.io and go to that project then go to API section
2. Go to Token Section
3. Generate Token

![MockAPI.io Screenshot](/public/step-8.jpg)

4. Copy and paste it to .env.local, your env file should be like this

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="your-porject-id"
NEXT_PUBLIC_SANITY_DATASET="your_project_dataset"
NEXT_SANITY_TOKEN=your_api_token
```
5. Go to `
   src/sanity/lib/client.ts
   ` & paste it:

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
8. Make a file
`
eg:Product.ts
`
9. Paste the schema that you generated
10. import the file and set it into types

```bash
import { type SchemaTypeDefinition } from 'sanity'
import insetData from './insetData'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [insetData],
}
```

# Step 4

1. Make an api route `src/app/api/upload/route.ts`
2. Now go to the 
