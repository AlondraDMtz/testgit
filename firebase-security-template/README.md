# Firebase Security Template

Proyecto base para implementar seguridad moderna con Firebase.
Incluye:
- Autenticación segura (OAuth 2.0, Google, 2FA)
- Reglas de Firestore con control de acceso por roles
- Middleware HTTPS y rate limiting
- Sanitización de entradas (XSS)
- Función automática de backup
- Endpoint de eliminación de datos (GDPR)

## Instalación

```bash
npm install
```

## Desarrollo local

- `npm run serve` (emuladores de Firebase)
- `npm start` (express local)

## Despliegue

```bash
firebase deploy
```

Asegúrate de configurar:
- Variables de entorno: `GCLOUD_PROJECT`, `BUCKET_NAME`
- Firebase Auth, Firestore, Cloud Functions
