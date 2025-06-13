import express from 'express';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase-config.js';

const router = express.Router();

router.post('/solicitar-eliminacion', async (req, res) => {
  const { uid } = req.body;
  await deleteDoc(doc(db, "usuarios", uid));
  res.send("Datos eliminados correctamente.");
});

export default router;
