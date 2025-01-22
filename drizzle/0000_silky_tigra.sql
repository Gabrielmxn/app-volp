CREATE TABLE `about` (
	`id` integer PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`execution_date_operation` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sync` (
	`id` integer,
	`description` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `verbete` (
	`id` integer PRIMARY KEY NOT NULL,
	`description` text NOT NULL,
	`foreing` integer DEFAULT false NOT NULL
);
