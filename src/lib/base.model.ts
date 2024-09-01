import {
    PUBLIC_SUPABASE_ANON_KEY,
    PUBLIC_SUPABASE_URL,
} from "$env/static/public";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import type { Database } from "./types/supabase.database";

class BaseModel {
    private static instance: BaseModel;
    supabasePublicInstance: SupabaseClient<Database> | undefined;
    supabasePublicAuthInstance: SupabaseAuthClient | undefined;

    /**
     * Creates or returns the singleton instance of the BaseModel class.
     */
    static getInstance(): BaseModel {
        if (!BaseModel.instance) {
            BaseModel.instance = new BaseModel();
        }
        return BaseModel.instance;
    }

    get supabasePublicClient() {
        if (!this.supabasePublicInstance) {
            throw new Error("Base Model not properly initialized");
        }
        return this.supabasePublicInstance;
    }

    constructor() {
        this.supabasePublicInstance = createClient<Database, "private">(
            PUBLIC_SUPABASE_URL,
            PUBLIC_SUPABASE_ANON_KEY,
            { db: { schema: "private" } },
        );
        this.supabasePublicAuthInstance = this.supabasePublicInstance?.auth;
    }
}

export default BaseModel;
