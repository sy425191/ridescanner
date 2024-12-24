import express from 'express';

const router = express.Router();


router.post('/', (req, res) => {
  const { slongitude, slatitude , elongitude , elatitude } = req.body;

  if (!slongitude || !slatitude  || !elongitude || !elatitude) {
    return res.status(400).json({ error: 'All Longitudes and latitudes are required' });
  }

  res.json({
    message: 'Location reoceived successfully!',
    data: {
      slongitude,
      slatitude,
      elatitude,
      elongitude
    },
  });
});

export default router;
