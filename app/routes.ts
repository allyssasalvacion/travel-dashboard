import { type RouteConfig, route, layout, index } from "@react-router/dev/routes";

export default [
    // route('sign-in', 'routes/root/sign-in.tsx'),
    route('api/create-trip', 'routes/api/create-trip.ts'),
    layout('routes/root/admin-layout.tsx', [
        route('/', 'routes/root/trips.tsx'),
        route('trips/create', 'routes/root/create-trip.tsx'),
        route('trips/:tripId', 'routes/root/trip-detail.tsx')
    ]),
    // layout('routes/admin/dashboard.tsx', [
    //     index('routes/root/travel-page.tsx'),
    // ])
] satisfies RouteConfig;