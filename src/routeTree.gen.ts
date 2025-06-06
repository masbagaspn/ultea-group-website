/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TentangKamiImport } from './routes/tentang-kami'
import { Route as KontakImport } from './routes/kontak'
import { Route as IndexImport } from './routes/index'
import { Route as ProdukIndexImport } from './routes/produk/index'
import { Route as InformasiIndexImport } from './routes/informasi/index'
import { Route as ProdukProdukIdImport } from './routes/produk/$produkId'
import { Route as InformasiInformasiIdImport } from './routes/informasi/$informasiId'

// Create/Update Routes

const TentangKamiRoute = TentangKamiImport.update({
  id: '/tentang-kami',
  path: '/tentang-kami',
  getParentRoute: () => rootRoute,
} as any)

const KontakRoute = KontakImport.update({
  id: '/kontak',
  path: '/kontak',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProdukIndexRoute = ProdukIndexImport.update({
  id: '/produk/',
  path: '/produk/',
  getParentRoute: () => rootRoute,
} as any)

const InformasiIndexRoute = InformasiIndexImport.update({
  id: '/informasi/',
  path: '/informasi/',
  getParentRoute: () => rootRoute,
} as any)

const ProdukProdukIdRoute = ProdukProdukIdImport.update({
  id: '/produk/$produkId',
  path: '/produk/$produkId',
  getParentRoute: () => rootRoute,
} as any)

const InformasiInformasiIdRoute = InformasiInformasiIdImport.update({
  id: '/informasi/$informasiId',
  path: '/informasi/$informasiId',
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
    '/kontak': {
      id: '/kontak'
      path: '/kontak'
      fullPath: '/kontak'
      preLoaderRoute: typeof KontakImport
      parentRoute: typeof rootRoute
    }
    '/tentang-kami': {
      id: '/tentang-kami'
      path: '/tentang-kami'
      fullPath: '/tentang-kami'
      preLoaderRoute: typeof TentangKamiImport
      parentRoute: typeof rootRoute
    }
    '/informasi/$informasiId': {
      id: '/informasi/$informasiId'
      path: '/informasi/$informasiId'
      fullPath: '/informasi/$informasiId'
      preLoaderRoute: typeof InformasiInformasiIdImport
      parentRoute: typeof rootRoute
    }
    '/produk/$produkId': {
      id: '/produk/$produkId'
      path: '/produk/$produkId'
      fullPath: '/produk/$produkId'
      preLoaderRoute: typeof ProdukProdukIdImport
      parentRoute: typeof rootRoute
    }
    '/informasi/': {
      id: '/informasi/'
      path: '/informasi'
      fullPath: '/informasi'
      preLoaderRoute: typeof InformasiIndexImport
      parentRoute: typeof rootRoute
    }
    '/produk/': {
      id: '/produk/'
      path: '/produk'
      fullPath: '/produk'
      preLoaderRoute: typeof ProdukIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/kontak': typeof KontakRoute
  '/tentang-kami': typeof TentangKamiRoute
  '/informasi/$informasiId': typeof InformasiInformasiIdRoute
  '/produk/$produkId': typeof ProdukProdukIdRoute
  '/informasi': typeof InformasiIndexRoute
  '/produk': typeof ProdukIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/kontak': typeof KontakRoute
  '/tentang-kami': typeof TentangKamiRoute
  '/informasi/$informasiId': typeof InformasiInformasiIdRoute
  '/produk/$produkId': typeof ProdukProdukIdRoute
  '/informasi': typeof InformasiIndexRoute
  '/produk': typeof ProdukIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/kontak': typeof KontakRoute
  '/tentang-kami': typeof TentangKamiRoute
  '/informasi/$informasiId': typeof InformasiInformasiIdRoute
  '/produk/$produkId': typeof ProdukProdukIdRoute
  '/informasi/': typeof InformasiIndexRoute
  '/produk/': typeof ProdukIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/kontak'
    | '/tentang-kami'
    | '/informasi/$informasiId'
    | '/produk/$produkId'
    | '/informasi'
    | '/produk'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/kontak'
    | '/tentang-kami'
    | '/informasi/$informasiId'
    | '/produk/$produkId'
    | '/informasi'
    | '/produk'
  id:
    | '__root__'
    | '/'
    | '/kontak'
    | '/tentang-kami'
    | '/informasi/$informasiId'
    | '/produk/$produkId'
    | '/informasi/'
    | '/produk/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  KontakRoute: typeof KontakRoute
  TentangKamiRoute: typeof TentangKamiRoute
  InformasiInformasiIdRoute: typeof InformasiInformasiIdRoute
  ProdukProdukIdRoute: typeof ProdukProdukIdRoute
  InformasiIndexRoute: typeof InformasiIndexRoute
  ProdukIndexRoute: typeof ProdukIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  KontakRoute: KontakRoute,
  TentangKamiRoute: TentangKamiRoute,
  InformasiInformasiIdRoute: InformasiInformasiIdRoute,
  ProdukProdukIdRoute: ProdukProdukIdRoute,
  InformasiIndexRoute: InformasiIndexRoute,
  ProdukIndexRoute: ProdukIndexRoute,
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
        "/kontak",
        "/tentang-kami",
        "/informasi/$informasiId",
        "/produk/$produkId",
        "/informasi/",
        "/produk/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/kontak": {
      "filePath": "kontak.tsx"
    },
    "/tentang-kami": {
      "filePath": "tentang-kami.tsx"
    },
    "/informasi/$informasiId": {
      "filePath": "informasi/$informasiId.tsx"
    },
    "/produk/$produkId": {
      "filePath": "produk/$produkId.tsx"
    },
    "/informasi/": {
      "filePath": "informasi/index.tsx"
    },
    "/produk/": {
      "filePath": "produk/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
