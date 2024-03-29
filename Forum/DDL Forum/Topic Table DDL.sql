USE FORUM 

IF NOT EXISTS (SELECT 1 FROM INFORMATION_SCHEMA.TABLES  WHERE TABLE_NAME = 'TOPICS')
BEGIN
	CREATE TABLE TOPICS(
	topic_id uniqueIdentifier DEFAULT (NEWID()) PRIMARY KEY,
	topic_name NVARCHAR(255) UNIQUE NOT NULL,
	topic_description text NOT NULL,
	topic_account_id uniqueIdentifier NOT NULL);

	ALTER TABLE TOPICS ADD CONSTRAINT FK_TOPIC_OWNER FOREIGN KEY(topic_owner) 
	REFERENCES ACCOUNTS(account_id) ON DELETE CASCADE;
END