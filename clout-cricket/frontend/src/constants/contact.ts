export const WHATSAPP_NUMBER = "918921191980";

export const WHATSAPP_LINK = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};