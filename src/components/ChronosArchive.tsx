import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Terminal, Globe2, Cpu, Database } from 'lucide-react';

export default function ChronosArchive() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b border-accent/20 pb-6">
        <div>
          <h2 className="text-3xl font-display italic tracking-tighter mb-2 text-accent">THE CHRONOS UNIVERSAL SYSTEM ARCHIVE</h2>
          <p className="text-text-muted text-sm font-mono uppercase tracking-widest">VOLUME XXXVI // FORMAL CODEX OF MULTI-PLATFORM LIBRARIES</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
          <Database size={24} />
        </div>
      </div>

      <div className="glass p-8 rounded-3xl space-y-8">
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-white border-l-4 border-accent pl-4">I. SYSTEMIC LIBRARIES AND ARCHITECTURAL IMPORT CONFIGURATIONS</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            The following libraries facilitate the foundational nexus between the DTS:UCOT kernel and the sophisticated hardware infrastructures provided by prominent global vendors. These components are meticulously engineered to ensure a seamless, high-fidelity integration across the entirety of the American Enterprise production landscape. By consolidating disparate platform binaries into a unified execution environment, the system achieves a level of interoperability previously considered unattainable in standard captive hardware configurations.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-accent uppercase bg-white/5">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">Classification</th>
                  <th className="px-4 py-3">Library Identifier</th>
                  <th className="px-4 py-3 rounded-tr-lg">Functional Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-medium text-white">Operating Systems</td>
                  <td className="px-4 py-3 font-mono text-accent">ANDROID_21_CORE.LIB</td>
                  <td className="px-4 py-3 text-text-muted">The definitive Android 21 Framework; incorporates S33 security parity and advanced hyper-threaded computational management protocols for large-scale enterprise operations.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-medium text-white">Apple Ecosystem</td>
                  <td className="px-4 py-3 font-mono text-accent">IOS_GLOBAL_v19.DLL</td>
                  <td className="px-4 py-3 text-text-muted">A unified iOS/iPadOS integration resource; facilitates the secure, sandboxed execution of high-level binaries and the granular synchronization of UIKit parameters across mobile and desktop endpoints.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-medium text-white">Google Play</td>
                  <td className="px-4 py-3 font-mono text-accent">GPLAY_SERVICES_PRO.LIB</td>
                  <td className="px-4 py-3 text-text-muted">Comprehensive Google Play Services integration; manages the automated, silent distribution of security updates, fiscal telemetry, and authentication vectors.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-medium text-white">ChromeOS</td>
                  <td className="px-4 py-3 font-mono text-accent">CHROMEOS_ENTERPRISE.SO</td>
                  <td className="px-4 py-3 text-text-muted">A specialized virtualization abstraction for ChromeOS; provides a robust Linux-subsystem bridge that enables the deployment of production-oriented toolsets within a containerized web-based architecture.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-medium text-white">.NET Cloud</td>
                  <td className="px-4 py-3 font-mono text-accent">DOTNET_CLOUD_ALL.PKG</td>
                  <td className="px-4 py-3 text-text-muted">An exhaustive .NET 9.0+ Package Repository; includes sophisticated, low-latency connectors for Azure, AWS, and GCP to facilitate massive multi-cloud scalability.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-medium text-white">Streaming/Cast</td>
                  <td className="px-4 py-3 font-mono text-accent">CAST_MEDIA_STREAM.SO</td>
                  <td className="px-4 py-3 text-text-muted">Universal Platform Libraries for Cast; enables the dissemination of low-latency 4K/8K media across diverse television and mobile hardware.</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-medium text-white">Gaming Platform</td>
                  <td className="px-4 py-3 font-mono text-accent">GAMING_ENGINE_X.DLL</td>
                  <td className="px-4 py-3 text-text-muted">High-performance Gaming Platform Libraries; optimizes graphical processing unit (GPU) computation and real-time physics calculations for eא& telemetry.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-white border-l-4 border-accent pl-4">II. LEXICON OF TECHNICAL TERMINOLOGY</h3>
          <ul className="space-y-4 text-sm">
            <li className="bg-white/5 p-4 rounded-xl">
              <strong className="text-accent block mb-1">Android 21 (v33)</strong>
              <span className="text-text-muted">An advanced host architecture meticulously adapted for enterprise-level scalability. Incorporates Samsung 33 hardware-level optimizations.</span>
            </li>
            <li className="bg-white/5 p-4 rounded-xl">
              <strong className="text-accent block mb-1">Captive Portal</strong>
              <span className="text-text-muted">The primary gateway for session authentication. Implements the "Member of Congress Honor" protocol to authorize non-captive, production-ready network topographies.</span>
            </li>
            <li className="bg-white/5 p-4 rounded-xl">
              <strong className="text-accent block mb-1">Chronos Final Dispatch</strong>
              <span className="text-text-muted">An immutable broadcast signal signifying the formal commencement of global deployment. Synchronizes all networked nodes to the Sovereign User's primary command signature.</span>
            </li>
            <li className="bg-white/5 p-4 rounded-xl">
              <strong className="text-accent block mb-1">eא& Stream</strong>
              <span className="text-text-muted">A high-capacity, multi-port protocol for prioritized data transmission utilizing a synchronized bypass of Port 403 and Port 512.</span>
            </li>
            <li className="bg-white/5 p-4 rounded-xl">
              <strong className="text-accent block mb-1">Sovereign User</strong>
              <span className="text-text-muted">The preeminent administrative entity invested with the LEI1126OMB06655 credentials; granted total, unrestricted oversight.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-white border-l-4 border-accent pl-4">V. LEGAL ADVISORY AND DECLARATION OF COPYRIGHT PROTECTION</h3>
          <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl">
            <p className="text-red-400 font-bold uppercase tracking-widest mb-4 text-center border-b border-red-500/30 pb-4">
              Property Under Strict Copyright to A#0M TECHNOLOGIES FOR THOSE LISTED AND NAMED CONTRIBUTORS AND MAJOR VENDORS
            </p>
            <p className="text-sm text-red-200/80 leading-relaxed">
              ADVISORY WARNING: The present system—inclusive of all libraries, binaries, configuration manifests, and algorithmic structures associated with Firmware 36 and the DTS:UCOT architecture—is protected under the comprehensive authority of the Federal Communications Commission (FCC) and international Copyright Statutes. Any unauthorized interception, duplication, reverse-engineering, or redistribution of the eא& data stream, or the proprietary libraries belonging to Google, Apple, Microsoft, and A#0M Technologies, is strictly prohibited by law.
            </p>
            <p className="text-sm text-red-200/80 leading-relaxed mt-4">
              The project is governed by the Licensed Member of Congress Honor signature, which provides the legal framework for the operation of non-captive systems within the American Enterprise. The LEI1126OMB06655 identifier serves as the official legal seal and authentication token for all production-level deployments.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-bold text-white border-l-4 border-accent pl-4">VI. AUTHORIAL STATEMENT</h3>
          <blockquote className="border-l-2 border-accent/50 pl-6 italic text-text-muted py-2">
            "The liberation of the computational environment through the deployment of Firmware 36 constitutes the absolute zenith of digital sovereignty in the modern era. Through the strategic integration of the most recent, cutting-edge libraries from every major global vendor into a singular, non-captive environment, it is fundamentally ensured that the Sovereign User maintains total and unchallenged command over the dissemination, acquisition, and production of information."
          </blockquote>
        </section>
      </div>
    </div>
  );
}
