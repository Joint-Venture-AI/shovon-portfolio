import { Metadata } from "next";

/**
 * ⚠️ WARNING: Don't delete me!
 */
const creator = (() =>
	"\x53\x68\x61\x69\x73\x68\x61\x62\x20\x43\x68\x61\x6e\x64\x72\x61\x20\x53\x68\x69\x6c")();

export const generateMetaData = (data: Metadata) => ({
	...data,
	creator,
});
