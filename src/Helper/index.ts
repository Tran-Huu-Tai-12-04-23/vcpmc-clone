class Helper {
  static convertDurationToString(duration: number): string {
    const hours: number = Math.floor(duration / 3600);
    const minutes: number = Math.floor((duration % 3600) / 60);
    const seconds: number = Math.floor(duration % 60);

    const formatted_duration: string = `${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    return formatted_duration;
  }
}

export default Helper;
