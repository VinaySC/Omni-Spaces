# Omni-Spaces

Welcome to **Omni-Spaces**, a modern, premium web application built with React and Vite. This project implements a sophisticated UI layout based on specific design tokens and interactions, featuring a scalable structure with a sidebar, conversation list, main view, and an collapsible details panel.

## Features

- **Premium UI Layout**: Follows a precise 20/60/20 column layout that is fully resizable.
- **Instant Flow**: Interactions are designed to be instant without lag or visual delay.
- **Refined Conversation List**:
  - Pixel-perfect padding (16px vertical, full-width items).
  - Consistent gaps between items and dividers.
  - Custom hover (`#F5F5F5`) and active states with 8px rounded corners.
  - Automatically selects the first conversation by default.
- **Filter Dropdown**: Custom dropdown filter menu with specialized hover states (`#F7F7F7`).
- **Sidebar Navigation**: Accordion menus with smooth transitions, unread badges, and custom SVG icons.
- **Details Panel**: A fully collapsible right-side panel with dynamic tab indicators that resize to precisely match the active tab text.
- **Theming System**: Powered by CSS variables designed directly from Figma, supporting semantic token usage across the app.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

You will need [Node.js](https://nodejs.org/) installed on your machine. We recommend the latest LTS version.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VinaySC/Omni-Spaces.git
   cd Omni-Spaces
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and navigate to the URL provided in your terminal (typically `http://localhost:5173`).

## Project Structure

The codebase is organized to encapsulate components and styling cleanly:
- `src/components/`: Contains all main UI components (`SideNavbar`, `MainContent`, `ConversationList`, `ConversationView`, `DetailsPanel`, `FilterDropdown`).
- `src/components/icons/`: A dedicated library of inline SVG components.
- `src/data/`: Centralized mock data (`mockConversations.js`) driving the dynamic UI.
- `src/App.jsx` & `src/index.css`: The root layout structure and global CSS variables.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS utilizing CSS Custom Properties (Variables)
- **Icons**: Custom inline SVGs and [Lucide React](https://lucide.dev/)
