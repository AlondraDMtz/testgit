const { google } = require('googleapis');
const firestore = google.firestore('v1');

exports.backupFirestore = async (req, res) => {
  const resApi = await firestore.projects.databases.exportDocuments({
    name: `projects/${process.env.GCLOUD_PROJECT}/databases/(default)`,
    requestBody: {
      outputUriPrefix: `gs://${process.env.BUCKET_NAME}/backups`,
    },
  });
  console.log('Backup iniciado:', resApi.data);
  res.send('Backup iniciado.');
};
