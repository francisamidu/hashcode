/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as FeaturesImport } from './routes/features'
import { Route as DocumentationImport } from './routes/documentation'
import { Route as DevelopersImport } from './routes/developers'
import { Route as AboutImport } from './routes/about'
import { Route as DashboardRouteImport } from './routes/dashboard/route'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as DashboardTransactionsImport } from './routes/dashboard/Transactions'
import { Route as AuthSignupImport } from './routes/auth/signup'
import { Route as AuthLoginImport } from './routes/auth/login'

// Create/Update Routes

const FeaturesRoute = FeaturesImport.update({
  id: '/features',
  path: '/features',
  getParentRoute: () => rootRoute,
} as any)

const DocumentationRoute = DocumentationImport.update({
  id: '/documentation',
  path: '/documentation',
  getParentRoute: () => rootRoute,
} as any)

const DevelopersRoute = DevelopersImport.update({
  id: '/developers',
  path: '/developers',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRouteRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  id: '/auth/',
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardTransactionsRoute = DashboardTransactionsImport.update({
  id: '/Transactions',
  path: '/Transactions',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  id: '/auth/signup',
  path: '/auth/signup',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/developers': {
      id: '/developers'
      path: '/developers'
      fullPath: '/developers'
      preLoaderRoute: typeof DevelopersImport
      parentRoute: typeof rootRoute
    }
    '/documentation': {
      id: '/documentation'
      path: '/documentation'
      fullPath: '/documentation'
      preLoaderRoute: typeof DocumentationImport
      parentRoute: typeof rootRoute
    }
    '/features': {
      id: '/features'
      path: '/features'
      fullPath: '/features'
      preLoaderRoute: typeof FeaturesImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/signup': {
      id: '/auth/signup'
      path: '/auth/signup'
      fullPath: '/auth/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/Transactions': {
      id: '/dashboard/Transactions'
      path: '/Transactions'
      fullPath: '/dashboard/Transactions'
      preLoaderRoute: typeof DashboardTransactionsImport
      parentRoute: typeof DashboardRouteImport
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardRouteImport
    }
  }
}

// Create and export the route tree

interface DashboardRouteRouteChildren {
  DashboardTransactionsRoute: typeof DashboardTransactionsRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
}

const DashboardRouteRouteChildren: DashboardRouteRouteChildren = {
  DashboardTransactionsRoute: DashboardTransactionsRoute,
  DashboardIndexRoute: DashboardIndexRoute,
}

const DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(
  DashboardRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/developers': typeof DevelopersRoute
  '/documentation': typeof DocumentationRoute
  '/features': typeof FeaturesRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/signup': typeof AuthSignupRoute
  '/dashboard/Transactions': typeof DashboardTransactionsRoute
  '/auth': typeof AuthIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/developers': typeof DevelopersRoute
  '/documentation': typeof DocumentationRoute
  '/features': typeof FeaturesRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/signup': typeof AuthSignupRoute
  '/dashboard/Transactions': typeof DashboardTransactionsRoute
  '/auth': typeof AuthIndexRoute
  '/dashboard': typeof DashboardIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/developers': typeof DevelopersRoute
  '/documentation': typeof DocumentationRoute
  '/features': typeof FeaturesRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/signup': typeof AuthSignupRoute
  '/dashboard/Transactions': typeof DashboardTransactionsRoute
  '/auth/': typeof AuthIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/about'
    | '/developers'
    | '/documentation'
    | '/features'
    | '/auth/login'
    | '/auth/signup'
    | '/dashboard/Transactions'
    | '/auth'
    | '/dashboard/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/developers'
    | '/documentation'
    | '/features'
    | '/auth/login'
    | '/auth/signup'
    | '/dashboard/Transactions'
    | '/auth'
    | '/dashboard'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/about'
    | '/developers'
    | '/documentation'
    | '/features'
    | '/auth/login'
    | '/auth/signup'
    | '/dashboard/Transactions'
    | '/auth/'
    | '/dashboard/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRouteRoute: typeof DashboardRouteRouteWithChildren
  AboutRoute: typeof AboutRoute
  DevelopersRoute: typeof DevelopersRoute
  DocumentationRoute: typeof DocumentationRoute
  FeaturesRoute: typeof FeaturesRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthSignupRoute: typeof AuthSignupRoute
  AuthIndexRoute: typeof AuthIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRouteRoute: DashboardRouteRouteWithChildren,
  AboutRoute: AboutRoute,
  DevelopersRoute: DevelopersRoute,
  DocumentationRoute: DocumentationRoute,
  FeaturesRoute: FeaturesRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthSignupRoute: AuthSignupRoute,
  AuthIndexRoute: AuthIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/about",
        "/developers",
        "/documentation",
        "/features",
        "/auth/login",
        "/auth/signup",
        "/auth/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard/route.tsx",
      "children": [
        "/dashboard/Transactions",
        "/dashboard/"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/developers": {
      "filePath": "developers.tsx"
    },
    "/documentation": {
      "filePath": "documentation.tsx"
    },
    "/features": {
      "filePath": "features.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/auth/signup": {
      "filePath": "auth/signup.tsx"
    },
    "/dashboard/Transactions": {
      "filePath": "dashboard/Transactions.tsx",
      "parent": "/dashboard"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx",
      "parent": "/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
