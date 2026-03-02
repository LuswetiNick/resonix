import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/sign-up(.*)", "/sign-in(.*)"]);
const isOrganizationSelectionRoute = createRouteMatcher(["/org-selection(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, orgId } = await auth();
  // Allow public route
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }
  // Protect private routes
  if (!userId) {
    await auth.protect();
  }
  // If the user is authenticated but has not selected an organization, redirect to the organization selection page
  if (isOrganizationSelectionRoute(req)) {
    return NextResponse.next();
  }
  // For all protected routes, ensure the user has selected an organization
  if (userId && !orgId) {
    const orgSelectionUrl = new URL("/org-selection", req.url);
    return NextResponse.redirect(orgSelectionUrl);
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
