import { getAccessToken, getSession } from "@/services/authServices";
import { getUserById } from "@/services/userServices";
import {
  adminRoutes,
  protectedRoutes,
  publicRoutes,
  authRoute,
} from "@/routes";

export async function middleware(request) {
  const session = await getSession();
  const accessToken = await getAccessToken();

  let userRole;
  if (session) {
    const user = await getUserById(session.id, accessToken);
    userRole = session.authorities[0];
  }

  const { nextUrl } = request;

  const isAuthenticated = !!accessToken;
  const isAdminRoute = nextUrl.pathname.startsWith(adminRoutes);
  const isPublicRoute =
    publicRoutes.includes(nextUrl.pathname) ||
    nextUrl.pathname.startsWith("/product");
  const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoute.includes(nextUrl.pathname);

  if (isAdminRoute && isAuthenticated && userRole != "ADMIN") {
    return Response.redirect(new URL("/", nextUrl));
  }

  if (isProtectedRoute && !isAuthenticated) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  if (isAuthenticated && isAuthRoute) {
    return Response.redirect(new URL("/", nextUrl));
  }

  return null;

  // console.log("pathname: ", nextUrl.pathname);
  // console.log("isAdminRoute: ", isAdminRoute);
  // console.log("isPublicRoute: ", isPublicRoute);
  // console.log("isProtectedRoute: ", isProtectedRoute);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
