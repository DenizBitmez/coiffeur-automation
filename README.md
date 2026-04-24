# Coiffeur App

A modern, conversion-oriented web application for hair salons. Features include dynamic service pages, an integrated appointment booking flow, and an intelligent backend powered by Firebase and Genkit AI.

## Features

- **Dynamic Service Landing Pages**: Rich-media showcasing of hair salon services.
- **Seamless Booking Flow**: Redirect-based appointment scheduling with automatic pre-selection.
- **Modern Tech Stack**: Built with Next.js 15, React 19, and Tailwind CSS.
- **Accessible UI**: Component-driven architecture using shadcn/ui and Radix.
- **AI Integration**: Powered by Google Genkit AI for advanced automations.
- **Database Backend**: Integrated with Firebase.

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix Primitives)
- **Forms**: React Hook Form with Zod validation
- **Backend & AI**: Firebase, Genkit AI

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server (runs on port `9002` by default):

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the application.

## Development

You can start the Genkit developer UI by running:
```bash
npm run genkit:dev
```

## Directory Structure
- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components (forms, generic UI elements).
- `src/ai`: Genkit AI configuration and flows.
