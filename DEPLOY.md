# Deploy Instructions

## Push to GitHub

1. Create a new repository at https://github.com/new
   - Name it `Cleanaya` (or your preferred name)
   - Leave "Initialize with README" unchecked
   - Click Create repository

2. Run these commands (replace `YOUR_USERNAME` with your GitHub username):

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Cleanaya.git
   git push -u origin main
   ```

## Deploy to Vercel

1. Install Vercel CLI and log in:
   ```bash
   npx vercel login
   ```

2. Deploy:
   ```bash
   npx vercel
   ```

   Or deploy for production:
   ```bash
   npx vercel --prod
   ```

**Alternative (recommended):** Connect GitHub to Vercel for automatic deploys:
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will detect the Vite setup—click Deploy
5. Future pushes to `main` will trigger automatic deployments
