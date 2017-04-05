using OperationNameGenerator.BusinessModels;
using OperationNameGenerator.ViewModels;

namespace OperationNameGenerator.Mappings
{
    public static class AdjectiveMappings
    {
        public static AdjectiveDto toAdjectiveDto (this Adjective adj)
        {
            return new AdjectiveDto
            {
                Value = adj.Value
            };
        }
    }
}
