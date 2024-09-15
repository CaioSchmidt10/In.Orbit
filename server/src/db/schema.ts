import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const goals = pgTable('Goals', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  title: text('title').notNull(),
  desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
  createdAt: timestamp('created at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})

export const goalsCompletions = pgTable('goals_completions', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  goalId: text('goals_id')
    .references(() => goals.id)
    .notNull(),
  createdAt: timestamp('created at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})