import type { CSSProperties } from "react"
import Image from "next/image"

type Project = {
  title: string
  description: string
  href: string
  tag: string
}

const projects: Project[] = [
  {
    title: "AWS hosted websites",
    tag: "AWS Console · AWS CLI · Next.js · GitHub Actions · Amplify",
    description:
      "Built a marketing website using S3, CloudFront, CloudWatch, as well as portfolio websites like this one using Next.js, GitHub Actions and Amplify.",
    href: "https://github.com/gkinthaert/portfolio",
  },
  {
    title: "AWS Migration to Infrastructure as Code",
    tag: "AWS CDK · TypeScript · AWS CLI",
    description:
      "Converted a manually-managed AWS environment to a fully automated CDK stack, reducing provisioning from hours to minutes and cutting disaster recovery RTO from 4–6 hours to under 15 minutes.",
    href: "https://github.com/gkinthaert/techhealth-migration",
  },
  {
    title: "Multi-Account CI/CD Pipeline",
    tag: "GitHub Actions · AWS CDK  .· TypeScript",
    description:
      "Built end-to-end GitHub Actions pipeline for automated infrastructure testing and deployment across multi-account AWS environments, eliminating manual release processes.",
    href: "#",
  },
  {
    title: "Cloud Cost Optimization Suite",
    tag: "FinOps · CloudWatch",
    description:
      "Implemented automated rightsizing and anomaly detection that reduced monthly cloud spend by 38% without impacting performance.",
    href: "#",
  },
  {
    title: "Zero-Trust Network Architecture",
    tag: "VPC · IAM · WAF",
    description:
      "Led the migration to a segmented, least-privilege network model with end-to-end encryption and continuous compliance checks.",
    href: "#",
  },
  {
    title: "Observability Platform",
    tag: "Prometheus · Grafana",
    description:
      "Rolled out unified metrics, logs, and tracing across 40+ microservices, improving mean time to resolution by 60%.",
    href: "#",
  },
]

type SocialLink = {
  label: string
  href: string
  icon: string
}

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/gkinthaert", icon: "/public/github.png" },
  { label: "LinkedIn", href: "https://linkedin.com/in/gkinthaert", icon: "/public/linkedin.png" },
  { label: "Email", href: "mailto:gkinthaert@gmail.com", icon: "/public/email.png" },
]

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #f7f8fa 0%, #eceef1 45%, #e2e5e9 100%)",
  color: "#1f2328",
  fontFamily:
    "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
}

export default function Page() {
  return (
    <main style={pageStyle}>
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "80px 24px 96px",
        }}
      >
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              width: "132px",
              height: "132px",
              margin: "0 auto 24px",
              borderRadius: "9999px",
              overflow: "hidden",
              boxShadow:
                "0 1px 2px rgba(16,24,40,0.06), 0 8px 24px rgba(16,24,40,0.10)",
              border: "4px solid #ffffff",
              position: "relative",
              backgroundColor: "#dfe3e8",
            }}
          >
            {/* Replace /profile.jpg with your own image placed in the /public folder */}
            <Image
              src="/public/grk.jpg"
              alt="Portrait photo"
              width={132}
              height={132}
              priority
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          <h1
            style={{
              fontSize: "30px",
              lineHeight: 1.2,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              margin: "0 0 8px",
            }}
          >
            Geert Kinthaert
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#5b626b",
              margin: "0 auto",
              maxWidth: "440px",
            }}
          >
            AWS Cloud Engineer
          </p>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                }}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={28}
                  height={28}
                  style={{ objectFit: "contain" }}
                />
              </a>
            ))}
          </div>
        </header>

        {/* Projects */}
        <section
          aria-label="Projects"
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "rgba(255,255,255,0.72)",
                border: "1px solid rgba(16,24,40,0.08)",
                borderRadius: "14px",
                padding: "20px 22px",
                boxShadow: "0 1px 2px rgba(16,24,40,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "6px",
                }}
              >
                <h2
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    margin: 0,
                  }}
                >
                  {project.title}
                </h2>
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#6b7280",
                    whiteSpace: "nowrap",
                  }}
                >
                  {project.tag}
                </span>
              </div>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.6,
                  color: "#5b626b",
                  margin: 0,
                }}
              >
                {project.description}
              </p>
            </a>
          ))}
        </section>

        {/* Footer */}
        <footer
          style={{
            marginTop: "56px",
            textAlign: "center",
            fontSize: "13px",
            color: "#8a919b",
          }}
        >
          {`© ${new Date().getFullYear()} Geert Kinthaert · Built with Next.js`}
        </footer>
      </div>
    </main>
  )
}
