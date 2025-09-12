# AI Teaching Companion

A modern Learning Management System (LMS) SaaS platform that revolutionizes education through AI-powered vocal interactions and real-time teaching sessions.

## Description

AI Teaching Companion is a comprehensive educational platform that combines the power of artificial intelligence with interactive voice technology to create engaging, personalized learning experiences. Built with Next.js, Supabase, and Stripe, this platform offers seamless user authentication, subscription management, and real-time AI teaching sessions powered by Vapi's vocal AI technology.

### Key Features

- **AI-Powered Teaching Companions**: Interactive vocal AI agents that provide personalized learning experiences
- **Real-time Voice Interactions**: Seamless voice-based learning sessions using Vapi AI
- **User Authentication & Management**: Secure authentication powered by Clerk
- **Subscription & Payment Processing**: Integrated Stripe payments for premium features
- **Companion Library**: Browse and discover AI teaching companions across various subjects
- **Session Tracking**: Monitor learning progress and session history
- **Modern UI/UX**: Beautiful, responsive interface built with Tailwind CSS and Radix UI

## Why?

### The Problem

Traditional online learning platforms often lack the personal touch and interactive engagement that makes learning effective. Students struggle with:
- **Limited interactivity**: Static content and one-way communication
- **Lack of personalization**: Generic learning experiences that don't adapt to individual needs
- **Poor engagement**: Monotonous interfaces that fail to maintain student interest
- **Inflexible scheduling**: Rigid learning structures that don't accommodate different learning styles

### Our Solution

AI Teaching Companion addresses these challenges by:
- **Creating interactive AI companions** that can engage in natural voice conversations
- **Providing personalized learning experiences** that adapt to each student's pace and style
- **Offering real-time feedback and guidance** through AI-powered vocal interactions
- **Enabling flexible, on-demand learning** that fits into any schedule
- **Supporting multiple subjects** with specialized AI teaching companions

### The Goal

To democratize quality education by making AI-powered, personalized teaching accessible to learners worldwide, creating a more engaging, effective, and scalable learning experience.

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Supabase account
- Clerk account
- Stripe account
- Vapi account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/saas-application.git
   cd saas-application
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Stripe
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

   # Vapi AI
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token

   # Sentry (optional)
   SENTRY_DSN=your_sentry_dsn
   ```

4. **Set up your databases**
   - Configure your Supabase database with the required tables
   - Set up Clerk authentication
   - Configure Stripe for payments
   - Set up Vapi for AI voice interactions

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Usage

### Getting Started

1. **Sign Up/Login**: Create an account or sign in using the authentication system
2. **Browse Companions**: Explore the companion library to find AI teaching assistants for your subjects
3. **Start a Session**: Click on a companion to begin an interactive learning session
4. **Voice Interaction**: Use your microphone to have natural conversations with the AI companion
5. **Track Progress**: Monitor your learning journey and session history

### Key Features

#### Companion Library
- Browse AI teaching companions across various subjects
- Filter by subject, topic, or search for specific content
- View companion details and capabilities

#### Interactive Sessions
- Real-time voice conversations with AI companions
- Personalized learning experiences
- Adaptive teaching based on your responses

#### Subscription Management
- Choose from different subscription tiers
- Manage your billing and payment information
- Access premium features and companions

#### Learning Analytics
- Track your learning progress
- View session history and completion rates
- Monitor your educational journey

### API Integration

The platform integrates with several powerful services:

- **Clerk**: User authentication and management
- **Supabase**: Database and real-time features
- **Stripe**: Payment processing and subscription management
- **Vapi**: AI voice interactions and conversation management
- **Sentry**: Error monitoring and performance tracking

## Contributing

We welcome contributions to AI Teaching Companion! Here's how you can help:

### Getting Started with Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features when possible
- Update documentation for any new features
- Ensure all tests pass before submitting

### Areas for Contribution

- **New AI Companions**: Create specialized teaching companions for different subjects
- **UI/UX Improvements**: Enhance the user interface and experience
- **Feature Development**: Add new functionality to the platform
- **Bug Fixes**: Help identify and resolve issues
- **Documentation**: Improve documentation and add examples
- **Testing**: Add comprehensive test coverage

### Code of Conduct

Please read and follow our Code of Conduct. We are committed to providing a welcoming and inclusive environment for all contributors.

### Questions?

If you have any questions about contributing, please:
- Open an issue for discussion
- Reach out to the maintainers
- Check existing issues and discussions

---

**Built with ❤️ using Next.js, Supabase, Stripe, and Vapi AI**