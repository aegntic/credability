
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const LegacyWebsite: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">CRED-ABILITY</h1>
              <p className="text-sm text-white/60">Secure Credential Management</p>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="text-white/80 hover:text-white">Home</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Features</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-white/80 hover:text-white">About</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Revolutionizing Credential Management
            </h1>
            <p className="text-xl text-white/70 mb-8">
              CRED-ABILITY provides a secure, decentralized platform for managing and verifying professional credentials in real-time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Early Access
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background effect */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Verification",
                description: "Blockchain-backed credential verification ensures tamper-proof records."
              },
              {
                title: "Real-time Access",
                description: "Instant access to verified credentials from anywhere in the world."
              },
              {
                title: "Privacy Control",
                description: "You control who sees your credentials and for how long."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform how you manage credentials?</h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've upgraded to the future of credential management.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Back to Main App
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} CRED-ABILITY, Inc. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white/90 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white/90 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white/90 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegacyWebsite;
