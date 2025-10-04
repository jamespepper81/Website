# BitSleuth Website

> **AI-Powered Bitcoin Wallet Analysis & Privacy Tools**

BitSleuth is a comprehensive Next.js 15 website serving as the primary marketing and educational hub for Bitcoin analysis tools. The platform features product landing pages for an AI-powered Bitcoin wallet analyzer and Bitcoin wallet app, an extensive educational glossary, SEO optimization, and privacy-compliant analytics.

**🌐 Production:** [https://www.bitsleuth.ai](https://www.bitsleuth.ai)

## ✨ Key Features

- **🎯 Multi-Product Landing Pages**: Dedicated pages for BitSleuth Analyzer (`/analyzer`) and BitSleuth Wallet (`/wallet`) with comprehensive feature showcases
- **📚 Educational Glossary**: Interactive Bitcoin terminology guide with 15+ terms and detailed explanations
- **🔍 SEO Optimized**: Custom robots.txt, sitemap, and metadata for maximum search engine visibility
- **🍪 Privacy Compliant**: Cookie consent system with Google Analytics gating
- **🎨 Modern UI**: Tailwind CSS + shadcn/ui + Radix primitives with light/dark theme support
- **🤖 AI Copy Generation**: Genkit + Google AI integration for marketing copy optimization
- **📱 Responsive Design**: Mobile-first approach with optimized user experience across all devices

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Radix primitives
- **AI**: Genkit (`@genkit-ai/next`, `@genkit-ai/googleai`) using `googleai/gemini-2.0-flash`
- **UX**: Embla Carousel, Lucide icons
- **SEO**: App Router metadata routes (`robots.ts`, `sitemap.ts`)
- **Deployment**: Vercel (optimized for Next.js 15)

---

## 🤖 AI Integration

### Current Implementation
The website includes a **Genkit + Google AI integration** for marketing copy generation. This system was initially used to generate landing page copy variants during the first iteration of the site, but has since evolved into a more comprehensive AI-powered content generation tool.

**Configuration:**
- `src/ai/genkit.ts` - Genkit setup with Google AI plugin
- `src/ai/flows/generate-landing-page-copy.ts` - Copy generation flow
- Uses Google AI Gemini 2.0 Flash model for content generation

### Setup & Usage

1. **Environment Configuration:**
   ```bash
   # Add to .env.local or .env
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```

2. **Development Server:**
   ```bash
   npm run genkit:dev  # Start Genkit developer UI
   ```

3. **Server-Side Usage Example:**
   ```typescript
   import { generateLandingPageCopy } from '@/ai/flows/generate-landing-page-copy';

   const result = await generateLandingPageCopy({
     productName: 'BitSleuth Analyzer',
     targetAudience: 'crypto analysts and investigators',
     valueProposition: 'AI-powered wallet insights and OPSEC risk detection',
     numberOfVariants: 3,
     tone: 'professional',
   });

   console.log(result.copyVariants);
   ```

### Historical Context
While Genkit was initially used to generate the first iteration of landing page copy, the current website content has been manually crafted and optimized based on user feedback and performance metrics. The AI system remains available for future content generation and A/B testing purposes.


---

## 🚀 Development Workflow

### Prerequisites
- **Node.js**: 18+ (20+ recommended)
- **npm**: Latest version
- **Google AI API Key**: For AI features (optional)

### Local Development

1. **Clone and Install:**
   ```bash
   git clone <repository-url>
   cd Website
   npm install
   ```

2. **Environment Setup:**
   ```bash
   cp .env.example .env.local
   # Add your environment variables
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   # Server runs on http://localhost:9002
   ```

4. **Available Scripts:**
   ```bash
   npm run dev          # Development server with Turbopack
   npm run build        # Production build
   npm run start        # Production server
   npm run lint         # ESLint checking
   npm run typecheck    # TypeScript type checking
   npm run genkit:dev   # Genkit AI development UI
   ```

### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Code formatting (via ESLint)
- **Husky**: Pre-commit hooks (if configured)

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── analyzer/          # Analyzer product page
│   ├── wallet/            # Wallet product page
│   ├── glossary/          # Educational glossary
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/
│   ├── landing/           # Landing page components
│   ├── ui/                # shadcn/ui components
│   └── theme-provider.tsx # Theme management
├── ai/                    # AI integration
│   ├── genkit.ts          # Genkit configuration
│   └── flows/             # AI flows
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

---

## 🎯 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with overview |
| `/analyzer` | AI-powered wallet analyzer product page |
| `/wallet` | Bitcoin wallet app product page |
| `/glossary` | Bitcoin terminology index |
| `/glossary/[term]` | Individual glossary term pages |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/company-information` | Company information |

---

## 🔧 Configuration

### Environment Variables
```bash
# Required for AI features
GOOGLE_GENAI_API_KEY=your_google_ai_api_key

# Optional
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

### Tailwind Configuration
- Custom color palette with Bitcoin-inspired themes
- Dark/light mode support
- Responsive breakpoints
- Custom animations and transitions

### SEO Configuration
- Custom metadata for each page
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] All routes load correctly
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Dark/light theme toggle works
- [ ] Cookie consent banner functions
- [ ] Analytics tracking (with consent)
- [ ] AI copy generation (if API key provided)
- [ ] SEO metadata displays correctly

### Performance Testing
- Lighthouse scores
- Core Web Vitals
- Image optimization
- Bundle size analysis

---

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

### Environment Configuration
- Production: `https://www.bitsleuth.ai`
- Staging: Configure in Vercel dashboard
- Development: `http://localhost:9002`

---

## 📊 Analytics & Monitoring

### Google Analytics
- Privacy-compliant implementation
- Consent-gated tracking
- Custom events for user interactions
- Conversion tracking for sign-ups

### Performance Monitoring
- Core Web Vitals tracking
- Error monitoring (if configured)
- Uptime monitoring
- SEO performance tracking

---

## 🤝 Contributing

### Development Guidelines
1. **Branch Naming**: `feature/description` or `fix/description`
2. **Commit Messages**: Use conventional commits
3. **Code Style**: Follow ESLint and Prettier configurations
4. **Testing**: Test all changes manually before submitting
5. **Documentation**: Update README if adding new features

### Pull Request Process
1. Create feature branch from `dev`
2. Make changes with proper testing
3. Update documentation if needed
4. Submit PR with clear description
5. Request review from team members

### Code Review Checklist
- [ ] Code follows project conventions
- [ ] No console.log statements in production code
- [ ] TypeScript types are properly defined
- [ ] Components are properly documented
- [ ] Performance impact is considered
- [ ] Accessibility standards are met

---

## 📚 Documentation

### Additional Resources
- **PRD**: `docs/PRD.md` - Product Requirements Document
- **SEO Strategy**: `docs/SEO_STRATEGY.md` - SEO optimization guide
- **Visual Recommendations**: `docs/todo.md` - UI/UX improvement suggestions

### External Links
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Genkit Documentation](https://firebase.google.com/docs/genkit)

---

## 🐛 Troubleshooting

### Common Issues

**Port 9002 already in use:**
```bash
# Kill process using port 9002
lsof -ti:9002 | xargs kill -9
```

**Build errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript errors:**
```bash
# Check types
npm run typecheck
```

**AI features not working:**
- Verify `GOOGLE_GENAI_API_KEY` is set correctly
- Check API key permissions
- Ensure Genkit dev server is running

---

## 📄 License

**PROPRIETARY SOFTWARE** - Copyright (c) 2025 BitSleuth. All rights reserved.

This software is the proprietary and confidential information of BitSleuth. 
It is provided solely for use by BitSleuth and its authorized personnel. 
This software is not intended for public distribution or open source use.

For licensing inquiries, contact: legal@bitsleuth.ai

---

## 🙏 Acknowledgments

- **Next.js Team** for the excellent React framework
- **Vercel** for seamless deployment platform
- **shadcn/ui** for beautiful component library
- **Tailwind CSS** for utility-first styling
- **Google AI** for powerful AI capabilities
- **Bitcoin Community** for inspiration and education

---

**Built with ❤️ by the BitSleuth Team**
