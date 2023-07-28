.PHONEY: all content_management user_management clean

all: content_management user_management

content_management:
	$(MAKE) -C packages/content_management

user_management:
	$(MAKE) -C packages/user_management

clean:
	$(MAKE) -C packages/content_management clean
	$(MAKE) -C packages/user_management clean
