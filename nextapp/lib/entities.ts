import { supabase } from './supabaseClient';

function entity(table: string) {
  return {
    async filter(filters: Record<string, any>) {
      const { data, error } = await supabase.from(table).select('*').match(filters);
      if (error) throw error;
      return data;
    },
    async create(values: Record<string, any>) {
      const { data, error } = await supabase.from(table).insert(values).select().single();
      if (error) throw error;
      return data;
    },
    async update(id: string | number, values: Record<string, any>) {
      const { data, error } = await supabase.from(table).update(values).eq('id', id).select().single();
      if (error) throw error;
      return data;
    },
  };
}

export const Dealer = entity('dealers');
export const Vehicle = entity('vehicles');
export const Transaction = entity('transactions');
export const RTOApplication = entity('rto_applications');
export const Notification = entity('notifications');
export const Feedback = entity('feedback');
export const SystemLog = entity('system_logs');
export const SystemConfig = entity('system_configs');
export const PaymentGateway = entity('payment_gateways');
export const LogisticsPartner = entity('logistics_partners');
export const DigitalDocument = entity('digital_documents');
export const MarketingAsset = entity('marketing_assets');
export const SocialMediaAccount = entity('social_media_accounts');

export const User = supabase.auth;
