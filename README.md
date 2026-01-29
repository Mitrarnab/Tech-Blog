# 🧠 TechBlog – Modern Tech Insights Platform

TechBlog is a **modern, SEO-optimized blogging platform** built with **Next.js App Router** and **Redux Toolkit**, focusing on **performance, accessibility, and clean UI/UX**.

The platform supports **article search**, **category filtering**, **dark/light theme persistence**, and follows **structured SEO best practices**, making it production-ready and Lighthouse-optimized.

---

## 🚀 Live Features

- 🔍 **Article Search** (title, description, content)
- 🗂 **Category Filtering**
- 🌙 **Dark / Light Theme** with `localStorage` persistence
- ⚡ **Fast Loading** using Next.js App Router
- ♿ **Accessible UI**
- 📱 **Fully Responsive Design**
- 🔎 **SEO-Friendly Architecture**

---

## 📊 Lighthouse Audit Results

Lighthouse audits were conducted using **Chrome DevTools (Production Mode)**.

Screenshots are stored in the `/screenshots` directory.

- ✅ Performance
- ✅ Accessibility
- ✅ Best Practices
- ✅ SEO

---

## 🔍 SEO Strategy

### 🏷 Meta Tags Implementation

Meta tags were implemented using **Next.js Metadata API**:

```ts
export const metadata = {
  title: "Tech Blog",
  description:
    "Latest technical articles on frontend, backend, and web development.",
};
```
