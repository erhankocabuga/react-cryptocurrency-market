import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/api";

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
});
