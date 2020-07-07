export const RENAME_PROFILE = '@@profile/RENAME_PROFILE';

export const renameProfile = (name) =>({
    type: RENAME_PROFILE,
    name,
});