import {  Content,  } from "./apiInterfaces";

export interface VideoData {
contents: Content[];
cursorNext: string;
didYouMean: null | string;
estimatedResults: number;
filterGroups: FilterGroup[];
refinements: string[];
}

export interface FilterGroup {
filters: Filter[];
title: string;
}

export interface Filter {
cursorSelect: string;
label: string;
selected: boolean;
}
  