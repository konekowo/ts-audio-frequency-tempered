/**
 * Creates a list of objects distributing frequency bins according to the equal-tempered scale.
 * groupLevel 				- 1 to 8, where 1 = 1/24 octave and 8 = full octave
 * sampleRate 				- audioContext.sampleRate
 * frequencyBinCount 	- analyser.frequencyBinCount
 * minFreq 						- skip frequencies lower than (Hz)
 * maxFreq 						- skip frequencies higher than (Hz)
 */
export function createAudioBars({ groupLevel, sampleRate, frequencyBinCount, minFreq, maxFreq, }?: {
    groupLevel?: number;
    sampleRate?: number;
    frequencyBinCount?: number;
    minFreq?: number;
    maxFreq?: number;
}): any[];
/**
 * Updates bars according to the given audio frequency data.
 * audioData - Uint8Array passed to analyser.getByteFrequencyData
 */
export function updateAudioBars(audioData: any): void;
export function getAudioBars(): any[];
export function getAudioEnergy(): number;
