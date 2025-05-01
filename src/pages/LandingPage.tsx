import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CRED-ABILITY
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A revolutionary credential management system designed to transform how digital identities are secured.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white rounded-full px-8 py-3 text-lg"
              >
                Get Early Access
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Background animation */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-teal-500 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Problem We're Solving</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-blue-400 text-4xl mb-4">81%</div>
              <h3 className="text-xl font-semibold mb-2">Data Breaches</h3>
              <p className="text-slate-300">of data breaches involve weak or stolen credentials</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-blue-400 text-4xl mb-4">100+</div>
              <h3 className="text-xl font-semibold mb-2">Credentials</h3>
              <p className="text-slate-300">managed by the average person across digital platforms</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-blue-400 text-4xl mb-4">59%</div>
              <h3 className="text-xl font-semibold mb-2">Password Reuse</h3>
              <p className="text-slate-300">of people reuse passwords across multiple services</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-blue-400 text-4xl mb-4">55%</div>
              <h3 className="text-xl font-semibold mb-2">Credential Attacks</h3>
              <p className="text-slate-300">of organizations experienced credential-based attacks last year</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How CRED-ABILITY Works</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-10">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intelligent Detection</h3>
                    <p className="text-slate-300">Automatically identifies credentials across digital platforms with minimal user intervention.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contextual Analysis</h3>
                    <p className="text-slate-300">Understands relationships and dependencies between credentials to identify vulnerabilities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proactive Security</h3>
                    <p className="text-slate-300">Provides actionable recommendations before breaches occur, not after.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Frictionless Experience</h3>
                    <p className="text-slate-300">Enhances security without creating additional user burden or friction.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-8 rounded-xl">
              <div className="bg-slate-900 p-4 rounded-lg mb-4 border border-slate-800">
                <div className="font-mono text-sm text-green-400">
                  <div className="mb-2">// Credential detection with confidence scoring</div>
                  <div>const apiKey = "abcdef123456";</div>
                  <div>const url = "https://api.example.com";</div>
                  <div>
                    fetch(url, &#123;
                      <div className="pl-4">headers: &#123;</div>
                      <div className="pl-8 text-yellow-300">"Authorization": "Bearer xyz123456"</div>
                      <div className="pl-4">&#125;</div>
                    &#125;);
                  </div>
                </div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                <div className="text-sm">
                  <div className="font-semibold mb-2 text-blue-400">CRED-ABILITY Detection Result:</div>
                  <div className="pl-4 font-mono">
                    <div>• API Key detected (90% confidence)</div>
                    <div>• Bearer Token detected (95% confidence)</div>
                    <div className="mt-2 text-teal-400">Recommendation: Rotate API key and implement vault storage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Components</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Browser Integration Engine</h3>
              <p className="text-slate-300">Detects and captures credentials across web applications with advanced pattern recognition and machine learning techniques.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Model Context Protocol Server</h3>
              <p className="text-slate-300">Processes credential events and coordinates between components, building comprehensive context graphs for security analysis.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Credential Vault</h3>
              <p className="text-slate-300">Securely stores and manages encrypted credentials using AES-256-GCM encryption and Argon2id key derivation for military-grade security.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Intelligence Layer</h3>
              <p className="text-slate-300">Analyzes credential context and generates actionable security recommendations based on risk assessments and relationship mapping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Exceptional ROI for Organizations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="inline-block bg-blue-500/20 text-blue-400 rounded-full px-4 py-1 text-sm font-semibold mb-2">Small Business</div>
                <div className="text-5xl font-bold text-blue-400">665%</div>
                <div className="text-slate-300 mt-1">ROI</div>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$21,000 password reset savings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$36,000 breach prevention value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$22,750 productivity gains</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg transform scale-110 border border-blue-500/30 shadow-lg shadow-blue-500/20">
              <div className="text-center mb-4">
                <div className="inline-block bg-blue-500/20 text-blue-400 rounded-full px-4 py-1 text-sm font-semibold mb-2">Mid-Market</div>
                <div className="text-5xl font-bold text-blue-400">1,042%</div>
                <div className="text-slate-300 mt-1">ROI</div>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$210,000 password reset savings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$360,000 breach prevention value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$292,500 productivity gains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$75,000 compliance cost reduction</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="inline-block bg-blue-500/20 text-blue-400 rounded-full px-4 py-1 text-sm font-semibold mb-2">Enterprise</div>
                <div className="text-5xl font-bold text-blue-400">1,300%</div>
                <div className="text-slate-300 mt-1">ROI</div>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$2.1M password reset savings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$3.6M breach prevention value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$2.9M productivity gains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>$5M reputation protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Exclusive Early Access</h2>
            <p className="text-xl text-slate-300 mb-10">Join our exclusive beta program and be among the first to experience the future of credential management.</p>
            <div className="bg-slate-800 p-8 rounded-xl">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-1 text-left">Full Name</label>
                    <input type="text" id="fullName" className="w-full bg-slate-700 rounded-lg border border-slate-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-left">Email Address</label>
                    <input type="email" id="email" className="w-full bg-slate-700 rounded-lg border border-slate-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1 text-left">Company</label>
                  <input type="text" id="company" className="w-full bg-slate-700 rounded-lg border border-slate-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-left">Why are you interested?</label>
                  <textarea id="message" rows={3} className="w-full bg-slate-700 rounded-lg border border-slate-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white rounded-lg px-8 py-3 text-lg"
                >
                  Request Access
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How is CRED-ABILITY different from a password manager?</h3>
              <p className="text-slate-300">Unlike traditional password managers that require manual entry, CRED-ABILITY automatically detects credentials, understands their relationships, and provides proactive security recommendations based on contextual analysis.</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How secure is the credential storage?</h3>
              <p className="text-slate-300">CRED-ABILITY uses AES-256-GCM encryption with Argon2id key derivation in a defense-in-depth architecture. The zero-knowledge design ensures sensitive data is encrypted on the client side.</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What types of credentials can it manage?</h3>
              <p className="text-slate-300">CRED-ABILITY handles all types of credentials including passwords, API keys, access tokens, OAuth tokens, personal access tokens, database credentials, and more.</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">When will CRED-ABILITY be available?</h3>
              <p className="text-slate-300">We're currently in a private beta phase. Sign up for early access to be among the first to experience CRED-ABILITY when we launch publicly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-teal-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Credential Security?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">Join the credential management revolution and experience the future of digital identity security.</p>
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-slate-100 rounded-full px-10 py-6 text-xl font-semibold"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">CRED-ABILITY</div>
              <p className="text-slate-400 mt-2">Transforming digital identity security</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400">© {new Date().getFullYear()} CRED-ABILITY, Inc. All rights reserved.</p>
            <p className="text-slate-500 text-sm mt-2">CRED-ABILITY is a registered trademark. Patent pending.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;