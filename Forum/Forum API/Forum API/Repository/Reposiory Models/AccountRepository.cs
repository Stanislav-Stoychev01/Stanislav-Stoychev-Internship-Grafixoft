﻿using Forum_API.Models;

namespace Forum_API.Repository.Reposiory_Models
{
    public class AccountRepository : BaseRepository<Account>, IAccountRepository
    {
        public AccountRepository(ForumContext repository_Context)
            : base(repository_Context)
        { 
        }
       
    }
}
