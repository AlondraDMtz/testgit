import { google } from 'googleapis';
const firestore = google.firestore('v1');

export async function backupFirestore() {
  const res = await firestore.projects.databases.exportDocuments({
    name: `projects/${process.env.GCLOUD_PROJECT}/databases/(default)`,
    requestBody: { outputUriPrefix: `gs://${process.env.BUCKET_NAME}/backups` },
  });
  console.log('Backup iniciado:', res.data);
}
