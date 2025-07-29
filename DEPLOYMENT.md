# 🚀 Deployment Guide - Vercel

This guide will help you deploy your Next.js portfolio to Vercel.

## 📋 Prerequisites

- GitHub account
- Vercel account (free)
- MongoDB Atlas account (for database)
- Gmail account (for contact form emails)

## 🔧 Environment Variables Setup

Before deploying, you need to set up the following environment variables:

### Required Environment Variables:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### How to get Gmail App Password:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this password in `EMAIL_PASS`

## 🌐 Deploy to Vercel

### Method 1: Using Vercel Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure Environment Variables:**
   - In the deployment settings, add your environment variables:
     - `MONGODB_URI`
     - `EMAIL_USER`
     - `EMAIL_PASS`

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Add Environment Variables:**
   ```bash
   vercel env add MONGODB_URI
   vercel env add EMAIL_USER
   vercel env add EMAIL_PASS
   ```

5. **Redeploy with Environment Variables:**
   ```bash
   vercel --prod
   ```

## 🔄 Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Show build logs and deployment status

## 🛠️ Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS settings as instructed

## 📊 Monitoring

Vercel provides:
- **Analytics**: Page views, performance metrics
- **Functions**: API route monitoring
- **Logs**: Real-time application logs
- **Speed Insights**: Core Web Vitals tracking

## 🔍 Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript errors are resolved

2. **Environment Variables Not Working:**
   - Ensure variables are added in Vercel dashboard
   - Redeploy after adding variables
   - Check variable names match exactly

3. **Database Connection Issues:**
   - Verify MongoDB URI is correct
   - Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
   - Check database user permissions

4. **Email Not Sending:**
   - Verify Gmail app password is correct
   - Ensure 2FA is enabled on Gmail account
   - Check email credentials in environment variables

## 📈 Performance Optimization

Your Next.js app is already optimized with:
- ✅ Static Site Generation (SSG)
- ✅ Image optimization
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Compression

## 🎯 Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form sends emails
- [ ] Check blog posts load from database
- [ ] Test theme switching works
- [ ] Verify responsive design on mobile
- [ ] Test all external links work
- [ ] Check SEO meta tags are present

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/)

---

🎉 **Congratulations!** Your portfolio is now live and ready to showcase your work to the world!