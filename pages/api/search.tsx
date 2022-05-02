// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { fetchHolidays } from '@lib/api/server';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const result = await fetchHolidays(req.body);
      res.status(200).json(result);
      break;
    default:
      res.status(403);
  }
};

export default handler;
