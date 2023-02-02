export interface TimeState {
  areRunning: boolean;
  minutes: number;
  seconds: number;
  milliseconds: number;
  hours: number;
}
export interface Record {
  minutes: string;
  seconds: string;
  milliseconds: string;
  id?: number;
}
export interface RecordState {
  amountOfRecords: number;
  timeRecords: Record[];
}
export interface ButtonWatchProps {
  areRunning?: boolean;
}
