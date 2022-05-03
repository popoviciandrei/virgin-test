This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Minimum versions to run the app:
```
"node": ">=14.9.0",
"npm": ">=6.14.8"
```

Create file `.env.local` in the root with this content:
```
API_DOMAIN=https://www.virginholidays.co.uk
URL=http://localhost:3000
```


First, run the development server:


```bash
yarn install
yarn dev
```

Open [http://localhost:3000/?location=orlando&departureDate=29-10-2022&duration=7](http://localhost:3000/?location=orlando&departureDate=29-10-2022) with your browser to see the result.

This page is started from pages/index.tsx.

## API Calls 

Calling the virgin api directly from Browser returns a CORS.

Once we start filtering the page for stars, Hotel facility, price min & max, we use the internal Node.js proxy api to make update calls to https://www.virginholidays.co.uk/cjs-search-api/search.

### How it works
You can filter by Number of Stars, Hotel Facilities ( free text), price min & max.

Whenever we apply some filters to narrow down the holiday search list, the browser makes a call to the next.js proxy server at

```
/api/search
```
see the code lib/api/index.tsx
```
'/api/search' endpoint is mapped to pages/api/search.tsx
```

On the next.js server side a call is made to the Virgin API endpoint POST https://www.virginholidays.co.uk/cjs-search-api/search. 
See the code
```
lib/api/server/virgin.tsx
```

Run the tests from cli:
```
yarn test
```



### From here there is some standard Next.js documentation links:

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!