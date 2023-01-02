export type Project = {
	title: string;
	details: string;
	seoUrl: string;
	overview: string;

	cover?: ProjectCover;

};

export type ProjectCover = {

	data: {
		attributes: {
			url: string;
			width?: number;
			height?: number;
		};
	};

};
