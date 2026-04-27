export type CognitionState = {
    attention: number;
    stress: number;
    fatigue: boolean;
    confusion: boolean;
}
export type InternalState = CognitionState & {
    lastClickTime: number;
    clickCount: number;
    lastScrollY:number;
    scrollChanges:number;
    lastActivityTime:number;
}