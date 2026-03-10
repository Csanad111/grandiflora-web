import { supabase } from './supabase';

/**
 * Fetches the project for a specific client.
 * @param {string} clientId - The ID of the client.
 */
export const getClientProject = async (clientId) => {
    const { data, error } = await supabase
        .from('projects')
        .select(`
      *,
      updates (*),
      before_after_media (*)
    `)
        .eq('client_id', clientId)
        .single();

    if (error) {
        console.error('Error fetching project:', error);
        return null;
    }

    return data;
};

/**
 * Fetches project updates.
 * @param {string} projectId - The ID of the project.
 */
export const getProjectUpdates = async (projectId) => {
    const { data, error } = await supabase
        .from('updates')
        .select('*')
        .eq('project_id', projectId)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching updates:', error);
        return [];
    }

    return data;
};

/**
 * Fetches before/after media for a project.
 * @param {string} projectId - The ID of the project.
 */
export const getBeforeAfterMedia = async (projectId) => {
    const { data, error } = await supabase
        .from('before_after_media')
        .select('*')
        .eq('project_id', projectId)
        .single();

    if (error) {
        console.error('Error fetching before/after media:', error);
        return null;
    }

    return data;
};
