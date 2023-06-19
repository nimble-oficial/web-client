import { siteConfig } from "@/config"
import {
  Command,
  Globe,
  Icon,
  Puzzle,
  Repeat,
  Shield,
  Workflow,
} from "lucide-react"

interface Feature {
  title: string
  content: string
  icon: Icon
}

// TODO: use icons from "@/components/icons"

export const features: Feature[] = [
  {
    title: "Commands",
    content: "Create dynamic commands with ease. No coding experience needed.",
    icon: Command,
  },
  {
    title: "Fully Automated",
    content: "Create workflows that execute commands for every server event.",
    icon: Workflow,
  },
  {
    title: "Advanced Permissions",
    content:
      "Create roles and assign permissions to them to control who can do what.",
    icon: Shield,
  },
  {
    title: "Cron Jobs",
    content: "Create cron jobs that execute commands on a schedule.",
    icon: Repeat,
  },
  {
    icon: Puzzle,
    title: "Easy to Use",
    content: `You don't need to be a developer to use ${siteConfig.name}. It's easy to use and intuitive.`,
  },
  {
    icon: Globe,
    title: "Open-Source",
    content:
      "We believe in open-source software. The code is available on GitHub. Feel free to contribute!",
  },
]
