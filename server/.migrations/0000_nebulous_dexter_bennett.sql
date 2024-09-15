CREATE TABLE IF NOT EXISTS "Goals" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"desired_weekly_frequency" integer NOT NULL,
	"created at" timestamp with time zone DEFAULT now() NOT NULL
);
